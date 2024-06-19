function Exercise1(props) {
    const isLoggedIn = props?.isLoggedIn;
    const name = props?.name;
  
    return (
      <div>
        {isLoggedIn && <h1>Welcome, {name}!</h1>}
        {!isLoggedIn && <p>Please sign in.</p>}
      </div>
    );
}

export default Exercise1;