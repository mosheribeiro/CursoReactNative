using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{

    public class Impressao
    {
        public static void vertices(List<Vertice> listaVertices, string titulo = ""){
            Console.WriteLine(titulo);
            foreach (var v in listaVertices)
            {
               Console.WriteLine(v);
            }
        }

        public static void arestas(List<Aresta> listaArestas, string titulo = ""){
            Console.WriteLine(titulo);
            foreach (var a in listaArestas)
            {
                Console.WriteLine(a);
            }
        }

        public static void listaAdjacencia(Grafo grafo, string titulo = ""){
            Console.WriteLine(titulo);
            Console.WriteLine((new ListadeAdjacencia(grafo)).ToString());
        }
    }
}