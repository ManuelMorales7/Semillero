const modeloDeNegocio = [
    {
      "codigo": 5,
      "nombre": "Actas de avance Adpro",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "1305060000 - EXTERIOR",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Adpro",
      "prefijo": "SETT"
    },
    {
      "codigo": 25,
      "nombre": "Alquiler",
      "activo": false,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "A1",
      "descripcionDocumentoFacturaDiaria": "ABR - Ajustes",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "ml"
    },
    {
      "codigo": 2,
      "nombre": "Alquiler 2",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 4,
        "nombre": "prueba hotfix",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Alquiler",
      "prefijo": "SETT"
    },
    {
      "codigo": 6,
      "nombre": "Facturación maquinaria amarilla",
      "activo": false,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "DZ",
      "descripcionDocumentoFacturaDiaria": "DIARIO ZAMORA",
      "conceptoCXC": "13060001 - INGRESOS FACTURADOS",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Alquiler",
      "prefijo": null
    },
    {
      "codigo": 10,
      "nombre": "FACTURACION OBRAS PROYECTO",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "RM",
      "descripcionDocumentoFacturaDiaria": "Desconocido - RM",
      "conceptoCXC": "1305050000 - NACIONALES",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Maquinaria",
      "prefijo": null
    },
    {
      "codigo": 20,
      "nombre": "MODELO ABR",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FV",
      "descripcionDocumentoFacturaDiaria": "Factura de Venta",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "FV"
    },
    {
      "codigo": 7,
      "nombre": "MODELO DE INTEGRACIÓN",
      "activo": false,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "1305050000 - NACIONALES",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Alquiler",
      "prefijo": "SETT"
    },
    {
      "codigo": 9,
      "nombre": "Modelo de negocio prueba DM",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "X7",
      "descripcionDocumentoFacturaDiaria": "Prueba FYC",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "FYC"
    },
    {
      "codigo": 18,
      "nombre": "MODELO FYC",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FV",
      "descripcionDocumentoFacturaDiaria": "Factura de Venta",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "FV"
    },
    {
      "codigo": 36,
      "nombre": "MODELO GENERAL",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "A1",
      "descripcionDocumentoFacturaDiaria": "ABR - Ajustes",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "ml"
    },
    {
      "codigo": 30,
      "nombre": "MODELO INTEGRAL",
      "activo": false,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "SS",
      "descripcionDocumentoFacturaDiaria": "FACTURAS SEMILLAS",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "SS"
    },
    {
      "codigo": 1,
      "nombre": "MODELO MANTENIMIENTOS",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "AK",
      "descripcionDocumentoFacturaDiaria": "ANOTACIONES PIMARIAS",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 3,
        "nombre": "Formato estándar de factura DIAN PRUEBA AGRUPACIÓN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": null
    },
    {
      "codigo": 8,
      "nombre": "MODELO NEGOCIO AP",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "X8",
      "descripcionDocumentoFacturaDiaria": "Prueba FYC2",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "F&C"
    },
    {
      "codigo": 16,
      "nombre": "MODELO NUEVO TD",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "S1",
      "descripcionDocumentoFacturaDiaria": "PRUEBA SO 1",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "SL"
    },
    {
      "codigo": 17,
      "nombre": "MODELO NUEVO TD1",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "PV",
      "descripcionDocumentoFacturaDiaria": "Provisión de Ventas",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "PV"
    },
    {
      "codigo": 31,
      "nombre": "Modelo prueba 2",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "X6",
      "descripcionDocumentoFacturaDiaria": "PRUEBAS FYC",
      "conceptoCXC": "13051006 - Canon inmuebles propios",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "XS"
    },
    {
      "codigo": 13,
      "nombre": "Modelo prueba consultor",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "1305050000 - NACIONALES",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "Adpro",
      "prefijo": "SETT"
    },
    {
      "codigo": 44,
      "nombre": "MODELO PRUEBA ELIMINAR 1",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "SETT"
    },
    {
      "codigo": 24,
      "nombre": "OTRAS VENTAS",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "TX",
      "descripcionDocumentoFacturaDiaria": "PRUEBA AP",
      "conceptoCXC": "1305050000 - NACIONALES",
      "formatoFactura": {
        "codigo": 3,
        "nombre": "Formato estándar de factura DIAN PRUEBA AGRUPACIÓN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "AP"
    },
    {
      "codigo": 27,
      "nombre": "PRUEBA",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "AH",
      "descripcionDocumentoFacturaDiaria": "DOCUMENTO PRUEBA",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": null
    },
    {
      "codigo": 23,
      "nombre": "PRUEBA CONSEC",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "X9",
      "descripcionDocumentoFacturaDiaria": "Prueba FYC doc nuevo",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "fv"
    },
    {
      "codigo": 12,
      "nombre": "prueba consecutivos manuales  (no usar)",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "X9",
      "descripcionDocumentoFacturaDiaria": "Prueba FYC doc nuevo",
      "conceptoCXC": "130510 - Honorarios",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "fv"
    },
    {
      "codigo": 32,
      "nombre": "Venta de software especializado o servicios XP",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "FE",
      "descripcionDocumentoFacturaDiaria": "Factura Electrónica",
      "conceptoCXC": "1305050001 - Cuentas por Cobrar a Clientes",
      "formatoFactura": {
        "codigo": 1,
        "nombre": "Formato estándar de factura DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "SETT"
    },
    {
      "codigo": 3,
      "nombre": "VENTAS GENERALES",
      "activo": true,
      "disponibleParaEliminacion": false,
      "tipoDocumentoFacturaDiaria": "SC",
      "descripcionDocumentoFacturaDiaria": "Saldo Inicial Conciliación Bancaria",
      "conceptoCXC": "13050201 - Clientes alquiler",
      "formatoFactura": {
        "codigo": 3,
        "nombre": "Formato estándar de factura DIAN PRUEBA AGRUPACIÓN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "formatoNotaCredito": {
        "codigo": 2,
        "nombre": "Formato estándar de nota crédito DIAN",
        "imagenVistaPrevia": null,
        "principal": false
      },
      "origenIntegracion": "FYC",
      "prefijo": "SC"
    }
  ]