import React, { useState } from 'react';
import {hover} from "@testing-library/user-event/dist/hover";

export function Cadastro() {
    const [despesaNome, setDespesaNome] = useState('');
    const [despesaValor, setDespesaValor] = useState('');
    const [receitaNome, setReceitaNome] = useState('');
    const [receitaValor, setReceitaValor] = useState('');
    const [despesaSalva, setDespesaSalva] = useState([]);
    const [receitaSalva, setReceitaSalva] = useState([]);

    const handleSalvarDespesa = () => {
        setDespesaSalva(prevState => [...prevState, { texto: `Despesa: ${despesaNome}, Valor: ${despesaValor}`, id: Date.now() }]);
    };

    const handleExcluirDespesa = (id) => {
        setDespesaSalva(prevState => prevState.filter(item => item.id !== id));
    };

    const handleSalvarReceita = () => {
        setReceitaSalva(prevState => [...prevState, { texto: `Receita: ${receitaNome}, Valor: ${receitaValor}`, id: Date.now() }]);
    };

    const handleExcluirReceita = (id) => {
        setReceitaSalva(prevState => prevState.filter(item => item.id !== id));
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Despesas</h5>
                            <div className="mb-3">
                                <label htmlFor="despesaNome" className="form-label">
                                    Nome:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="despesaNome"
                                    placeholder="Digite o nome da despesa"
                                    value={despesaNome}
                                    onChange={(e) => setDespesaNome(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="despesaValor" className="form-label">
                                    Valor:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="despesaValor"
                                    placeholder="Digite o valor da despesa"
                                    value={despesaValor}
                                    onChange={(e) => setDespesaValor(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    style={{ marginTop: '10px',
                                             backgroundColor: "blue"
                                }}
                                    onClick={handleSalvarDespesa}
                                >
                                    Salvar
                                </button>
                            </div>

                            <div>
                                {despesaSalva.map((item) => (
                                    <div key={item.id}
                                         style={{ marginTop: '10px'}}
                                    >
                                        {item.texto}
                                        <button style={{ backgroundColor:"white",
                                                         border:"none"  }}
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleExcluirDespesa(item.id)}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Receitas</h5>
                            <div className="mb-3">
                                <label htmlFor="receitaNome" className="form-label">
                                    Nome:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="receitaNome"
                                    placeholder="Digite o nome da receita"
                                    value={receitaNome}
                                    onChange={(e) => setReceitaNome(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="receitaValor" className="form-label">
                                    Valor:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="receitaValor"
                                    placeholder="Digite o valor da receita"
                                    value={receitaValor}
                                    onChange={(e) => setReceitaValor(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    style={{ marginTop: '10px',
                                        backgroundColor: "blue"
                                    }}
                                    onClick={handleSalvarReceita}
                                >
                                    Salvar
                                </button>
                            </div>

                            <div>
                                {receitaSalva.map((item) => (
                                    <div key={item.id}
                                         style={{ marginTop: '10px'}}
                                    >
                                        {item.texto}
                                        <button style={{ backgroundColor:"white",
                                                         border:"none"  }}
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleExcluirReceita(item.id)}
                                        >
                                            ️❌
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
