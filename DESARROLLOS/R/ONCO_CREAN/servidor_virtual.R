library(shiny)
library(readr)
library(dplyr)

# Interfaz de usuario (UI)
ui <- fluidPage(
  titlePanel("Procesador de CSV"),
  
  sidebarLayout(
    sidebarPanel(
      fileInput("archivo", "Sube tu CSV", accept = ".csv"),
      actionButton("procesar", "Procesar Archivo"),
      textOutput("mensaje")
    ),
    
    mainPanel(
      tableOutput("contenido")
    )
  )
)

# Servidor (Server)
server <- function(input, output) {
  datos_reactivos <- reactiveVal(NULL)
  
  # Cargar archivo
  observeEvent(input$archivo, {
    req(input$archivo)
    datos <- read_csv(input$archivo$datapath, na = "", trim_ws = TRUE, locale = locale(encoding = "UTF-8"), col_types = cols(.default = "c"))
    datos_reactivos(datos)
    output$contenido <- renderTable(head(datos))
  })
  
  # Función personalizada para extraer edad
  extraer_edad <- function(texto) {
    texto <- toupper(iconv(texto, to = "ASCII//TRANSLIT")) # quita tildes
    texto <- gsub("[^A-Z0-9 ]", "", texto) # quita caracteres raros
    texto <- gsub(" +", " ", texto) # quita espacios múltiples
    texto <- trimws(texto) # quita espacios laterales
    
    anios <- 0
    meses <- 0
    
    # ✅ Detectar edades como "7" o "14" sin texto adicional
    if (grepl("^[0-9]+$", texto)) {
      return(c(as.numeric(texto), 0))
    }
    
    # Detectar años con "A" o "AN"
    if (grepl("([0-9]+) ?A", texto)) {
      anios <- as.numeric(sub(".*?([0-9]+) ?A.*", "\\1", texto))
    } else if (grepl("([0-9]+) ?AN", texto)) {
      anios <- as.numeric(sub(".*?([0-9]+) ?AN.*", "\\1", texto))
    }
    
    # Detectar meses
    if (grepl("([0-9]+) ?M", texto)) {
      meses <- as.numeric(sub(".*?([0-9]+) ?M.*", "\\1", texto))
    }
    
    # Solo meses (sin años)
    if (anios == 0 && grepl("^[0-9]+ ?M", texto)) {
      meses <- as.numeric(gsub("[^0-9]", "", texto))
    }
    
    return(c(anios, meses))
  }
  
  # Procesar archivo cuando se presiona el botón
  observeEvent(input$procesar, {
    req(datos_reactivos())
    
    datos <- datos_reactivos()
    
    nuevos_nombres <- c(
      "ID",                        # cons
      "OOAD",                      # OOAD
      "Unidad_Medica",             # UNIDAD MÉDICA
      "Nombre_Paciente",           # NOMBRE DEL PACIENTE (apellido paterno, materno, nombre(s)
      "Num_Seguridad_Social",      # NÚMERO DE SEGURIDAD SOCIAL
      "Agregado_Medico",           # AGREGADO MÉDICO
      "Fecha_Nacimiento",          # FECHADENACIMIENTO(día/mes/año)
      "Edad",                      # EDAD
      "Fecha_Inicio_Sintomas",     # FECHADEINICIODESINTOMATOLOGÍA(día/mes/año)
      "Fecha_Confirmacion_Dx",     # FECHADECONFIRMACIÓNDELDIAGNÓSTICO (día/mes/año)
      "Diagnostico",               # DIAGNÓSTICO
      "Estadio",                   # ESTADIO (I, II, III,IV,V, NA)
      "Fecha_Envio_OncoCREAN",     # FECHADEENVÍOALONCOCREAN (día/mes/año)
      "Fecha_Primera_Atencion",    # FECHADEATENCIÓNDEPRIMERAVEZENONCOCREAN (día/mes/año)
      "Unidad_Refiere",            # UNIDAD QUE REFIERE (1= UMF, 2= HGSZ/HGZ/HGR, 3= CENTRO DE REFERENCIA)
      "Fecha_Inicio_QT",           # FECHADEINICIODEQUIMIOTERAPIA (día/mes/año)
      "Esquema_QT",                # ESQUEMA DE QT DE PRIMERA LINEA UTILIZADO
      "Fecha_Termino_QT",          # FECHA DE TÉRMINO DE QUIMIOTERAPIA (día/mes/año)
      "Enviado_Referencia",        # EL PACIENTE FUE ENVIADO AL CENTRO DE REFERENCIA ESPECIALIZADO ONCOCREAN (1=SI, 0=NO)
      "Fecha_Envio_Centro",        # FECHADEENVÍOACRE (día/mes/año)
      "Motivo_Envio",              # MOTIVO DE ENVÍO A CENTRO DE REFERENCIA
      "Fecha_Ultima_Visita",       # FECHADEÚLTIMAVISITAAONCOCREAN (día/mes/año)
      "Fecha_Recaida",             # FECHA DE RECAÍDA (día/mes/año)
      "Fecha_Defuncion",           # FECHA DE DEFUNCIÓN (día/mes/año)
      "Causa_Defuncion",           # CAUSA DE LA DEFUNCIÓN
      "Comentarios",               # COMENTARIOS
      "Dx_Frecuente"               # Dx Frecuente
    )
    
    colnames(datos) <- nuevos_nombres
    
    # Función segura para extraer número
    extraer_numero <- function(texto) {
      suppressWarnings(as.numeric(texto))
    }
    
    datos <- datos %>%
      mutate(
        Edad_parseada = lapply(Edad, extraer_edad),
        Años = sapply(Edad_parseada, function(x) x[1]),
        Meses = sapply(Edad_parseada, function(x) x[2]),
        Edad_decimal = Años + round(Meses / 12, 2)
      ) %>%
      select(-Edad_parseada) %>%
      relocate(Años, Meses, .after = Edad)
    
    # Ruta de salida
    ruta_nueva <- "/Users/djaineDelacruzsanchezguillermo/Documents/INVESTIGACIONES/ONCO_CREA/censo_corregido.csv"
    
    # Reemplazar NA con cadenas vacías antes de guardar
    datos[is.na(datos)] <- ""
    
    # Guardar el archivo corregido
    write.csv(datos, ruta_nueva, row.names = FALSE, fileEncoding = "UTF-8", na = "")
    
    output$mensaje <- renderText(paste("Archivo corregido guardado en:", ruta_nueva))
  })
}

# Ejecutar la app
shinyApp(ui, server)