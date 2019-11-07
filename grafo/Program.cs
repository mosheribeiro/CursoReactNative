/* using System;

namespace grafo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
} */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{
    class Program
    {
        static void Main(string[] args)
        {
            Grafo g = new Grafo(false);

         
            g.addAresta("I", "J");
            g.addAresta("I", "M");
            g.addAresta("I", "G");
            g.addAresta("I", "K");
            g.addAresta("G", "H");
            g.addAresta("K", "L");
            g.addAresta("K", "D");
            g.addAresta("D", "E");
            g.addAresta("D", "B");
            g.addAresta("B", "C");
            g.addAresta("B", "A");
            g.addAresta("E", "F");
            g.addAresta("E", "G");



          //  Impressao.vertices(g.verticesGrafo, "Vertices");
          //  Impressao.arestas(g.arestasGrafo,"Arestas");
          //  Impressao.listaAdjacencia(g, "Lista de Adjacencias");
            g.DFS("J");
        }
    }
}
