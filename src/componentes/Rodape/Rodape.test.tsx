import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from ".";
import useListaDeParticipantes from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes");

const mockNavegacao = jest.fn();

jest.mock("../../state/hooks/useSorteador", () => jest.fn());

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("Quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("A brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("Quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "José",
    ]);
  });
  test("A brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).not.toBeDisabled();
  });

  test("A brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
  });
});
