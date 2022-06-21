import React from "react";

function Inner() {
  const b = [
    {
      URL: "profile",
      Name: "xyz",
      Description:
        "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
    },
    {
      URL: "profile",
      Name: "xyz",
      Description:
        "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
    },
    {
      URL: "profile",
      Name: "xyz",
      Description:
        "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
    },
    {
      URL: "profile",
      Name: "xyz",
      Description:
        "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
    },
    {
      URL: "profile",
      Name: "xyz",
      Description:
        "Loremjsbvjbriybkhsrabsh haklifyewhcKBVBVkhjhdzsbvilaylbgwakfebuobgewvs ",
    },
  ];
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textalign:"center",
    margin: "20px",
    padding: "25px"
  };
  const arr = b.map((cvalue) => (
    <div  style={styles}>

      <div className="m-2 p-2">
        <img
          className="w-[20vw] brdr"
          src={require(`../../Assets/${cvalue.URL}.jpg`)}
        />
        <h2 className="font-bold p-3 text-center">{cvalue.Name}</h2>
      </div>
      <div>
        <p className="text-center">{cvalue.Description}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{arr[0]}</div>
      <div>{arr[1]}</div>
      <div>{arr[2]}</div>
      <div>{arr[3]}</div>
      <div>{arr[4]}</div>
    </div>
  );
}

export default Inner;
