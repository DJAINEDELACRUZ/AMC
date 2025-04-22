library(shiny)
library(readr)
library(dplyr)
library(shinyFiles)

ui <- fluidPage(
  titlePanel("Limpiador de NSS con ruta de salida personalizada"),
  
  sidebarLayout(
    sidebarPanel(
      fileInput("archivo", "Sube tu CSV ya procesado", accept = ".csv"),
      shinySaveButton("guardar", "Seleccionar ubicación de guardado", "Guardar como...", filetype = list(csv = "csv")),
      actionButton("limpiar", "Limpiar y Guardar"),
      textOutput("mensaje")
    ),
    mainPanel(
      tableOutput("vista_previa")
    )
  )
)

server <- function(input, output, session) {
  datos_reactivos <- reactiveVal(NULL)
  ruta_guardado <- reactiveVal(NULL)
  
  # Permitir acceso a todo el sistema de archivos
  shinyFileSave(input, "guardar", roots = c(home = "~"), session = session)
  
  observeEvent(input$archivo, {
    req(input$archivo)
    datos <- read_csv(input$archivo$datapath, na = "", trim_ws = TRUE, locale = locale(encoding = "UTF-8"), col_types = cols(.default = "c"))
    datos_reactivos(datos)
    output$vista_previa <- renderTable(head(datos))
  })
  
  observeEvent(input$guardar, {
    req(input$guardar)
    ruta <- parseSavePath(roots = c(home = "~"), input$guardar)
    if (nrow(ruta) > 0) {
      ruta_guardado(as.character(ruta$datapath))
    }
  })
  
  observeEvent(input$limpiar, {
    req(datos_reactivos())
    req(ruta_guardado())
    
    datos <- datos_reactivos()
    
    # Limpiar la columna del NSS
    datos <- datos %>%
      mutate(Num_Seguridad_Social = gsub("[^0-9]", "", Num_Seguridad_Social))
    
    # Guardar archivo
    write.csv(datos, ruta_guardado(), row.names = FALSE, fileEncoding = "UTF-8", na = "")
    output$mensaje <- renderText(paste("Archivo guardado exitosamente en:", ruta_guardado()))
  })
}

shinyApp(ui, server)