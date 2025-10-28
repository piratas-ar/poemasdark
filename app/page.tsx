'use client'
import { useCallback, useState } from 'react';
import { autores, Ethnicity, Quote } from '@/lib/autores'

export default function AuthorQuiz() {
  const quotes: Quote[] = autores;
  const jewQuotes: Quote[] = autores.filter((autor) => autor.autor === 'Judío');
  const palestinianQuotes: Quote[] = autores.filter((autor) => autor.autor === 'Palestino');;

  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [ choose, setChoose ] = useState(false)

  const getRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setShowResult(false);
  }, [quotes]);

  const returnRandomQuote = useCallback((ethnicity : Ethnicity | null = null) => {
    let quotedb = quotes;
    if (ethnicity) {
      quotedb = ethnicity !== 'Judío' ? jewQuotes : palestinianQuotes
    }
    const randomIndex = Math.floor(Math.random() * quotedb.length);
    return (quotedb[randomIndex]);
  }, [quotes]);

  const handleGuess = (guess: 'Judío' | 'Palestino') => {
    if (!currentQuote) return;
    
    const correct = guess === currentQuote.autor;
    setIsCorrect(correct);
    setShowResult(true);
    setAttempts(attempts + 1);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setChoose(false)
    getRandomQuote();
  };

  const buildAuthorName = (quote: Quote) => {
    return <>{quote.nombre}<br/> {quote.autor.toString()}</>
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="min-vh-100 d-flex align-items-center justify-content-center p-4" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div className="card shadow-lg" style={{ maxWidth: '1200px', width: '100%' }}>
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <h1 className="display-4 fw-bold mb-2">Poemario</h1>
              <p className="text-muted">Leé el poema en voz alta, pensalo un momento, y luego intenta adivinar a su autor basado en los detalles que aparecerán</p>
              <div className="d-flex justify-content-center gap-5 mt-4">
                <div className="text-center">
                  <p className="text-muted small mb-1">Puntuación</p>
                  <p className="h2 fw-bold text-primary mb-0">{score}/{attempts}</p>
                </div>
                <div className="text-center">
                  <p className="text-muted small mb-1">Precisión</p>
                  <p className="h2 fw-bold text-primary mb-0">
                    {attempts > 0 ? Math.round((score / attempts) * 100) : 0}%
                  </p>
                </div>
              </div>
            </div>

            {!currentQuote ? (
              <div className="text-center">
                <button
                  onClick={getRandomQuote}
                  className="btn btn-primary btn-lg px-5 py-3"
                >
                  Empezar a leer
                </button>
              </div>
            ) : (
              <div>
                <div className="bg-light rounded p-4 mb-4 d-flex" style={{ minHeight: '40px' }}>
                  <pre className="fs-5 fw-bold text-center mb-0">
                    {currentQuote.titulo}
                  </pre>
                </div>
                <div className="bg-white rounded p-4 mb-4 d-flex" style={{ minHeight: '150px' }}>
                  <pre className="fs-5 fst-italic text-left mb-0">
                    {currentQuote.texto}
                  </pre>
                </div>
                {!showResult && choose ? (
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <button
                        onClick={() => handleGuess('Judío')}
                        className="btn btn-info btn-lg w-100 py-3"
                      >
                        {buildAuthorName(currentQuote)}
                      </button>
                    </div>
                    <div className="col-md-6 col-12">
                      <button
                        onClick={() => handleGuess('Palestino')}
                        className="btn btn-secondary btn-lg w-100 py-3"
                      >
                        {buildAuthorName(returnRandomQuote(currentQuote.autor))}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    { !choose ? (<button 
                      className="btn btn-primary btn-lg px-5 py-3"
                      onClick={() => setChoose(true)}>Elegir</button>
                    ) : (
                      <>
                        <div className={`alert ${isCorrect ? 'alert-success' : 'alert-danger'} mb-4`}>
                          <p className="fs-5 fw-semibold mb-2">
                            {isCorrect ? '✓ Respuesta correcta' : '✗ Respuesta equivocada!'}
                          </p>
                          <p className="mb-0">
                            La respuesta correcta es: <span className="fw-bold">{currentQuote.autor} ({currentQuote.nombre})</span>
                          </p>
                        </div>
                        <button
                          onClick={handleNext}
                          className="btn btn-primary btn-lg px-5 py-3"
                        >
                          Próximo Poema
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="mt-5 pt-4 border-top text-center">
              <p className="text-muted small mb-0">
                Esta página esta aún muy en construcción
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
