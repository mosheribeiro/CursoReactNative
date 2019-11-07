using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace grafo
{
    public class Vertice
    {
        public string chave
        {
            get;
            private set;
        }

        public Vertice(string chave)
        {
            this.chave = chave;
        }

        public override string ToString()
        {
            return this.chave;
        }

        public override bool Equals(object obj)
        {
            return this.chave == ((Vertice) obj).chave;
        }
    }
}
