

namespace grafo
{
    public class Aresta
    {
        public Vertice vertice1
        {
            get;
            private set;
        }
        public Vertice vertice2
        {
            get;
            private set;
        }

        public int peso
        {
            get;
            private set;
        }

        public bool ehDirecionada
        {
            get;
            private set;
        }

        public Aresta(Vertice vertice1, Vertice vertice2, int peso = 0, bool ehDirecionada = false)
        {
            this.vertice1 = vertice1;
            this.vertice2 = vertice2;
            this.peso = peso;
            this.ehDirecionada = ehDirecionada;

        }

        public override bool Equals(object obj)
        {
            Aresta a = (Aresta)obj;

            if (this.vertice1.Equals(a.vertice1) && this.vertice2.Equals(a.vertice2) && this.peso == a.peso)
                return true;

            if (!this.ehDirecionada && this.vertice1.Equals(a.vertice2) && this.vertice2.Equals(a.vertice1) && this.peso == a.peso)
                return true;

            return false;
        }

        public override string ToString()
        {
            if (this.ehDirecionada)
                return this.vertice1 + " -> " + this.vertice2;
            else return this.vertice1 + " - " + this.vertice2;
        }

    }
}
