using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{

    public class Grafo
    {


        public List<Aresta> arestasGrafo
        {
            get;
            private set;
        }

        public List<Vertice> verticesGrafo
        {
            get;
            private set;
        }

        public bool ehDirecionado
        {
            get;
            private set;
        }

        // Algoritmos
        DFS algDfs;

        public Grafo(bool ehDirecionado)
        {
            this.arestasGrafo = new List<Aresta>();
            this.verticesGrafo = new List<Vertice>();
            this.ehDirecionado = ehDirecionado;
        }


        public void addAresta(string vertice1, string vertice2, int peso = 0)
        {
            Aresta aresta = new Aresta(new Vertice(vertice1), new Vertice(vertice2), peso, this.ehDirecionado);

            if (!verticesGrafo.Contains(aresta.vertice1))
                verticesGrafo.Add(aresta.vertice1);

            if (!verticesGrafo.Contains(aresta.vertice2))
                verticesGrafo.Add(aresta.vertice2);

            if (!arestasGrafo.Contains(aresta))
                this.arestasGrafo.Add(aresta);

        }

        public Vertice getVertice(string chaveVertice){
                return verticesGrafo.Where(x => x.chave == chaveVertice).FirstOrDefault();
        }

        public void DFS(string chaveVertice){
            this.algDfs = new DFS(this);
             Impressao.vertices(this.algDfs.busca(chaveVertice),"#######  DFS  ######");
        }
    }
}
