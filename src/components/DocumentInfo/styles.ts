import styled from 'styled-components';
import { OutcomeEnum } from '../../model/evaluation';

export const Document = styled.div`
  margin: 0px 57px 0px 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DocumentImage = styled.img`
  height: 160px;
  width: 260px;
  border-radius: 12px;
  border: ${(props: { status: OutcomeEnum }) =>
    props.status === OutcomeEnum.SUCCESS
      ? '2px solid #69CC8B'
      : '2px solid #C00000'};
`;

export const DocumentStatus = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  position: relative;
  top: -15px;
  right: 24px;
  width: 105px;
  height: 30px;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props: { status: OutcomeEnum }) =>
    props.status === OutcomeEnum.SUCCESS ? '#69cc8b' : '#C00000'};

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  line-height: 12px;
  text-transform: uppercase;
`;
