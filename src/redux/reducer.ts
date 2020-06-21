interface IAction {
   type: string,
   payload?: any,
}

export const reducer = (state = {}, { type }: IAction) => {
   switch (type) {
      default:
         return state;
   }
}