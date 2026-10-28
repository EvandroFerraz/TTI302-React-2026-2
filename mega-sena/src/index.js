

import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TOTAL_DEZENAS = 6;
const MAIOR_DEZENA = 60;

class MegaSena extends Component {
  constructor(props) {
    super(props);

    // O jogo é uma lista de dezenas mantida no estado do componente.
    this.state = { jogo: [] };

    this.gerarJogo = this.gerarJogo.bind(this);
  }

  /**
   * Sorteia TOTAL_DEZENAS valores distintos no intervalo [1, MAIOR_DEZENA].
   * O Set descarta repetições automaticamente: o laço só termina quando
   * houver seis dezenas diferentes.
   */
  sortearDezenas() {
    const dezenas = new Set();

    while (dezenas.size < TOTAL_DEZENAS) {
      dezenas.add(Math.floor(Math.random() * MAIOR_DEZENA) + 1);
    }

    return Array.from(dezenas).sort((a, b) => a - b);
  }

  gerarJogo() {
    this.setState({ jogo: this.sortearDezenas() });
  }

  render() {
    const { jogo } = this.state;

    return (
      <Container className="py-5">
        <Row>
          <Col xs={12} md={8} lg={6} xl={5} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Header className="text-muted">Mega sena</Card.Header>

              <Card.Body>
                <Row className="justify-content-center align-items-center g-2 mb-3">
                  {jogo.length === 0 ? (
                    <Col xs="auto" className="text-muted small py-3">
                      Nenhum jogo gerado ainda.
                    </Col>
                  ) : (
                    jogo.map((dezena) => (
                      <Col xs="auto" key={dezena}>
                        <div className="bg-success-subtle text-success-emphasis rounded px-3 py-2 fs-5">
                          {String(dezena).padStart(2, '0')}
                        </div>
                      </Col>
                    ))
                  )}
                </Row>

                <Button
                  variant="outline-success"
                  className="w-100"
                  onClick={this.gerarJogo}
                >
                  Gerar jogo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<MegaSena />);