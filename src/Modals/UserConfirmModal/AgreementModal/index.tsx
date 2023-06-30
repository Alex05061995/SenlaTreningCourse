import { styled } from "styled-components"


const AgreementModalWrapper = styled.div`
  padding: 10px;
`

interface DetailModalProps {
  onClickBack?: () => void;
  onClickConfirm?: () => void
}

const AgreementModal: React.FC<DetailModalProps> = ({ onClickBack, onClickConfirm }) => {
  return (
    <AgreementModalWrapper>
          <h3>Описание соглашения</h3>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam rem totam amet molestiae, temporibus, quae quaerat vel sint, eligendi tempore dolor perspiciatis! Labore magni quisquam voluptates enim consequatur. Perspiciatis, ullam.
          </div>
          <div>
            <button onClick={onClickBack}>Назад</button>
            <button onClick={onClickConfirm}>Согласие</button>
          </div>
        </AgreementModalWrapper>
  )
}

export default AgreementModal