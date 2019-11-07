using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{
    public class DFS
    {
        private List<Vertice> visitados;
        private ListadeAdjacencia listaAdjacencia;
        private Grafo grafo;
        public DFS(Grafo grafo)
        {
            this.grafo = grafo;
            this.visitados = new List<Vertice>();
            this.listaAdjacencia = new ListadeAdjacencia(grafo);
        }

        public List<Vertice> busca(string chaveVertice){
            this.visitados.Clear();
            buscaProfundidade(grafo.getVertice(chaveVertice));
            return visitados;
        }

        private void buscaProfundidade(Vertice v){
            this.visitados.Add(v);
            foreach (var vizinho in this.listaAdjacencia.getVizinhos(v.chave))
            {
                if(!visitados.Contains(vizinho))
                    buscaProfundidade(vizinho);
            }

        }

    }
}
