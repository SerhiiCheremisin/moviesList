 
export const numberRenderLogic = (array: number[], page: number): number[] => {
   
    const pivot = array.indexOf(page);
    
    switch (pivot) {
        case 0:
         const defaultSequence = array.slice(pivot, pivot+5);   
         return defaultSequence;
        case 1:
         const firstException = array.slice(pivot-1, pivot+4);  
         return firstException;
        case 2:
         const secondException = array.slice(pivot-2, pivot+3);
         return secondException;
        case array.length-1:
          const lastException = array.slice(pivot-4, array.length+2);
         return lastException;
        case array.length-2:
          const almostLastException = array.slice(pivot-3, array.length+1);
         return almostLastException;
        default:
         const sequence = array.slice(pivot-2, pivot+3);
         return sequence;
    }
 
 }