using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{
    public class ListadeAdjacencia
    {
        public IDictionary<string, List<Vertice>> listaAdjacencia
        {
            get;
            private set;
        }


        public ListadeAdjacencia(Grafo g)
        {
            listaAdjacencia = new Dictionary<string, List<Vertice>>();
            foreach (var v in g.verticesGrafo.OrderBy(x => x.chave))
            {
                // inicializo lista de adjacencia para cada vertice
                listaAdjacencia.Add(v.chave, new List<Vertice>());

                if (!g.ehDirecionado)
                {
                    var arestasIncidentesEmV = from c in g.arestasGrafo
                                               where c.vertice1.chave == v.chave || c.vertice2.chave == v.chave
                                               select c;

                    foreach (var arestaIncidente in arestasIncidentesEmV)
                    {
                        if (arestaIncidente.vertice1.chave != v.chave)
                        {
                            listaAdjacencia[v.chave].Add(arestaIncidente.vertice1);
                        }
                        else
                        {
                            listaAdjacencia[v.chave].Add(arestaIncidente.vertice2);
                        }
                    }

                }
                else
                {
                    //TODO - Lista de adjacencia para grafo orientado
                }
            }
        }

        public List<Vertice> getVizinhos(string chave){
            return listaAdjacencia[chave];
        }

        public override string ToString()
        {
            string printlistaAdjacencia = "Lista Adjacencia \n";
            foreach (var v in listaAdjacencia.OrderBy(x => x.Key))
            {
                printlistaAdjacencia = printlistaAdjacencia + v.Key + " | ";
                foreach (var adjacentesDeV in v.Value)
                {
                    printlistaAdjacencia = printlistaAdjacencia + adjacentesDeV.chave+" ";
                }
                printlistaAdjacencia = printlistaAdjacencia + "\n";
            }

            return printlistaAdjacencia;
        }

    }

}
