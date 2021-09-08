import React from 'react';

const SearchStatus = ({length}) => {
    const renderPhrase = (number) => {
        if (number >1 && number <5) return "человека зависнут";
        if (number === 1) return "человек зависнет";
        return "человек зависнут";
      };
      return (
          <h2>
              < span className = {"badge" + (length > 0 ? "bg-primary" : "bg-danger")} >
                  {length > 0 ? `${length + " " + renderPhrase(length)} с тобой сегодня` : "Никто с тобой не зависнет"}
              </span>
          </h2>
      );
    
};
 
export default SearchStatus;