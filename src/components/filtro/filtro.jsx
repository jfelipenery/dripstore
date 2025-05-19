export default function filtro() {
    return ( 


<main className="principal">
      <section className="filtro">
        <div aclassName="geral">
          <p aclassName="categorias" id="um">Filtrar por</p>
          <hr />
          <p classclassName="linha"></p>
          <p className="categorias">Marca</p>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="marca" value="adidas" />
            <label for="adidas">Adidas</label>
          </div>
          <div className="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="marca"
              value="calenciaga"
            />
            <label for="calenciaga">Calenciaga</label>
          </div>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="marca" value="kswiss" />
            <label for="kswiss">K-Swiss</label>
          </div>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="marca" value="nike" />
            <label for="nike">Nike</label>
          </div>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="marca" value="puma" />
            <label for="puma">Puma</label>
          </div>
          <p className="categorias">Categoria</p>
          <div className="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="categoria"
              value="esporteLazer"
            />
            <label for="esporteLazer">Esporte e Lazer</label>
          </div>
          <div class="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="categoria"
              value="casual"
            />
            <label for="casual">Casual</label>
          </div>
          <div className="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="categoria"
              value="utilitario"
            />
            <label for="utilitario">Utilitário</label>
          </div>
          <div className="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="categoria"
              value="corrida"
            />
            <label for="corrida">Corrida</label>
          </div>
          <p className="categorias">Gênero</p>
          <div className="marcador">
            <input
              type="checkbox"
              id="filtro"
              name="genero"
              value="masculino"
            />
            <label for="masculino">Masculino</label>
          </div>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="genero" value="feminino" />
            <label for="feminino">Feminino</label>
          </div>
          <div className="marcador">
            <input type="checkbox" id="filtro" name="genero" value="unisex" />
            <label for="unisex">Unisex</label>
          </div>
          <p className="categorias">Estado</p>
          <div className="marcador">
            <input type="radio" id="filtro" name="estado" value="novo" />
            <label for="novo">Novo</label>
          </div>
          <div NclassName="marcador">
            <input type="radio" id="filtro" name="estado" value="usado" />
            <label for="usado">Usado</label>
          </div>
        </div>
      </section>
    </main>
    
    )

    }