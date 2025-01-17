export const myViewConfig = {
    "coordinationSpace": {
      "dataset": {
        "A": "A"
      },
      "embeddingType": {
        "A": "UMAP"
      },
      "obsLabelsType": {
        "A": "Marker Gene 0",
        "B": "Marker Gene 1",
        "C": "Marker Gene 2",
        "D": "Marker Gene 3",
        "E": "Marker Gene 4"
      }
    },
    "datasets": [
      {
        "files": [
          {
            "fileType": "anndata.zarr",
            "options": {
              "featureLabels": {
                "path": "var/hugo_symbol"
              },
              "obsEmbedding": [
                {
                  "dims": [
                    0,
                    1
                  ],
                  "embeddingType": "UMAP",
                  "path": "obsm/X_umap"
                }
              ],
              "obsFeatureMatrix": {
                "initialFeatureFilterPath": "var/marker_genes_for_heatmap",
                "path": "X"
              },
              "obsLabels": [
                {
                  "obsLabelsType": "Marker Gene 0",
                  "path": "obs/marker_gene_0"
                },
                {
                  "obsLabelsType": "Marker Gene 1",
                  "path": "obs/marker_gene_1"
                },
                {
                  "obsLabelsType": "Marker Gene 2",
                  "path": "obs/marker_gene_2"
                },
                {
                  "obsLabelsType": "Marker Gene 3",
                  "path": "obs/marker_gene_3"
                },
                {
                  "obsLabelsType": "Marker Gene 4",
                  "path": "obs/marker_gene_4"
                }
              ],
              "obsSets": [
                {
                  "name": "Leiden",
                  "path": "obs/leiden"
                }
              ]
            },
            "url": "https://assets.dev.hubmapconsortium.org/e65175561b4b17da5352e3837aa0e497/hubmap_ui/anndata-zarr/secondary_analysis.zarr"
          }
        ],
        "name": "e65175561b4b17da5352e3837aa0e497",
        "uid": "A"
      }
    ],
    "description": "",
    "initStrategy": "auto",
    "layout": [
      {
        "component": "scatterplot",
        "coordinationScopes": {
          "dataset": "A",
          "embeddingType": "A",
          "obsLabelsType": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ]
        },
        "h": 6,
        "w": 9,
        "x": 0,
        "y": 0
      },
      {
        "component": "obsSets",
        "coordinationScopes": {
          "dataset": "A",
          "obsLabelsType": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ]
        },
        "h": 3,
        "w": 3,
        "x": 9,
        "y": 0
      },
      {
        "component": "featureList",
        "coordinationScopes": {
          "dataset": "A",
          "obsLabelsType": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ]
        },
        "h": 3,
        "w": 3,
        "x": 9,
        "y": 4
      },
      {
        "component": "obsSetFeatureValueDistribution",
        "coordinationScopes": {
          "dataset": "A",
          "obsLabelsType": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ]
        },
        "h": 4,
        "w": 5,
        "x": 7,
        "y": 6
      },
      {
        "component": "heatmap",
        "coordinationScopes": {
          "dataset": "A",
          "obsLabelsType": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ]
        },
        "h": 4,
        "w": 7,
        "x": 0,
        "y": 6
      }
    ],
    "name": "e65175561b4b17da5352e3837aa0e497",
    "version": "1.0.15"
  }