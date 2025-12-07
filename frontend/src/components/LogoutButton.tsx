const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-red-600 hover:underline"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
