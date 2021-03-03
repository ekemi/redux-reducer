export function managePresents(state, action){

  if (state ===undefined){
      return state=[]
  }
    

    switch(action.type){
        case "INCREASE": 
        return { numberOfPresents: state.numberOfPresents +1};

        default:
            return state;
    }

    
}
