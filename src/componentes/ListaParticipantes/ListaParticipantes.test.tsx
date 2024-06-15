import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from ".";
import useListaDeParticipantes from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes");

describe("Uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("Deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("Uma lista preenchida de participantes", () => {
  const participantes = ["Ana", "Catarina"];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("Deve ser renderizada com elementos elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
