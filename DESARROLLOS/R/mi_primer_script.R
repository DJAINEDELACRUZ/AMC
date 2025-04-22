#el primer codigo pequeño
nombre <- "Djaine"
edad <- 33  # Cambia esto por tu edad
print(paste("Hola, soy", nombre, "y tengo", edad, "años"))


#segundo script de exploracion
library(readr)

ruta <- "/Users/djainedelacruzsanchezguillermo/Documents/INVESTIGACIONES/ONCO_CREA/censo.csv"
datos <- read_csv(ruta)
# Mostrar las primeras filas para verificar
head(datos)


#tercer script para procesar un archivo 
# Cargar librerías necesarias
library(readr)
library(dplyr)

# Ruta del archivo original
ruta_original <- "/Users/djaineDelacruzsanchezguillermo/Documents/INVESTIGACIONES/ONCO_CREA/censo.csv"

# Leer el archivo CSV asegurando que los valores vacíos no se conviertan en NA
# Leer el archivo asegurando que los caracteres especiales se lean bien
datos <- read_csv(ruta_original, na = "", trim_ws = TRUE, locale = locale(encoding = "UTF-8"), col_types = cols(.default = "c"))

# Cambiar los nombres de las columnas
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

# Asignar los nuevos nombres
colnames(datos) <- nuevos_nombres

# Ruta para guardar el nuevo archivo corregido
ruta_nueva <- "/Users/djaineDelacruzsanchezguillermo/Documents/INVESTIGACIONES/ONCO_CREA/censo_corregido.csv"

# Guardar el CSV con TABULACIONES en lugar de comas o punto y coma
# Reemplazar NA por cadenas vacías antes de guardar
datos[is.na(datos)] <- ""

# Guardar el archivo corregido sin NA
write.csv(datos, ruta_nueva, row.names = FALSE, fileEncoding = "UTF-8", na = "")

# Mensaje de éxito
cat("Archivo corregido guardado en:", ruta_nueva, "\n")




#fase 4
library(shiny)

ui <- fluidPage(
  fileInput("archivo", "Sube tu CSV"),
  tableOutput("contenido")
)

server <- function(input, output) {
  output$contenido <- renderTable({
    req(input$archivo)
    read.csv(input$archivo$datapath)
  })
}

shinyApp(ui, server)