const StatsCard = ({ title, amount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-green-600">Ksh {amount}</p>
    </div>
  );
};

export default StatsCard;
