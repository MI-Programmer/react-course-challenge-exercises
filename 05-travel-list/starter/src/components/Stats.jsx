/* eslint-disable react/prop-types */
const Stats = ({ listData }) => {
  const amountList = listData.length;
  const completed = listData.filter((item) => item.completed).length;
  const percent = Math.floor((completed / amountList) * 100);

  return (
    <div className="stats">
      <em>
        {amountList > 0 ? (
          percent === 100 ? (
            "You got everything! Ready to go ✈️"
          ) : (
            <>
              💼 You have {amountList} items on your list, and you already
              packed {completed} ({percent}%)
            </>
          )
        ) : (
          "Start adding some items to your packing list 🚀"
        )}
      </em>
    </div>
  );
};

export default Stats;
