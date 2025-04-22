# 🧠 Carga de paquetes ----
if (!require(readxl)) {
  install.packages("readxl")
  library(readxl)
  message("✅ readxl instalado y cargado.")
} else {
  message("✅ readxl ya estaba disponible.")
}
if(!require(dplyr)) install.packages("dplyr")
if(!require(ggplot2)) install.packages("ggplot2")
if(!require(janitor)) install.packages("janitor")
if(!require(tidyr)) install.packages("tidyr")
if(!require(janitor)) install.packages("janitor")

library(janitor)
library(readxl)
library(dplyr)
library(ggplot2)
library(janitor)
library(tidyr)

# 📂 Cargar el archivo Excel ----
# Reemplaza con tu ruta real
archivo <- "/Users/djaineDelacruzsanchezguillermo/Documents/INVESTIGACIONES/NEFROLOGIA/Retrospectivo17-22.xlsx"
datos <- read_excel(archivo)

# 🧼 Limpiar nombres de columnas ----
datos <- clean_names(datos)

# 🕵️ Exploración básica ----
glimpse(datos)
summary(datos)

# 🎯 Análisis descriptivo ----

# Edad de receptores
# 🎯 Análisis descriptivo ----

# Edad de receptores
# Edad de receptores
datos %>%
  select(edad_anos_15) %>%
  filter(!is.na(edad_anos_15)) %>%
  summarise(
    promedio = mean(edad_anos_15, na.rm = TRUE),
    mediana = median(edad_anos_15, na.rm = TRUE),
    desviacion = sd(edad_anos_15, na.rm = TRUE),
    minimo = min(edad_anos_15, na.rm = TRUE),
    maximo = max(edad_anos_15, na.rm = TRUE)
  )

# Distribución por sexo
datos %>%
  count(sexo_14) %>%
  mutate(porcentaje = n / sum(n) * 100)

# Tipo de donante más común
datos %>%
  count(tipo_de_donante_5) %>%
  arrange(desc(n))

# Comorbilidades (DM, HAS, VIH, etc.)
comorbilidades <- c("dm_si_no", "has_si_no", "peritonitis_si_no")
datos %>%
  select(all_of(comorbilidades)) %>%
  summarise_all(~ sum(. == "Si", na.rm = TRUE))  # Asegúrate que esté en texto

# 🎨 Visualización: distribución de edades ----
ggplot(datos, aes(x = edad_anos_15)) +
  geom_histogram(bins = 30, fill = "skyblue", color = "black") +
  labs(title = "Distribución de edad de receptores", x = "Edad", y = "Frecuencia")

# ❓¿Hay relación entre tipo de donante y edad?
ggplot(datos, aes(x = tipo_de_donante_5, y = edad_anos_15)) +
  geom_boxplot(fill = "lightgreen") +
  labs(title = "Edad según tipo de donante", x = "Tipo de Donante", y = "Edad")

# 🔍 Detectar valores faltantes por columna
datos %>%
  summarise_all(~ sum(is.na(.))) %>%
  pivot_longer(everything(), names_to = "variable", values_to = "NA_count") %>%
  arrange(desc(NA_count)) %>%
  head(20)  # Top 20 columnas con más huecos emocionales