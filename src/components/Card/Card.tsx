import { FunctionalComponent } from 'vue';
import CSS from './Card.module.scss'
import classnames from 'classnames'
export interface CardProps {
  primary: boolean;
  borderRadius: boolean;
}

export const Card: FunctionalComponent<CardProps> = ({primary, borderRadius}, {slots}) => {
  
  const className= `${CSS.card} ${primary? CSS.card__primary: ""} ${borderRadius? "": CSS.card__nonBoderRadius}`;
  
  return (
    <div 
      class={
        classnames(
          CSS.card, 
          primary? CSS.card__primary: "", 
          borderRadius? "": CSS.card__nonBoderRadius
        )
      }>
        {slots.default && slots.default()}
    </div>
  )
}
