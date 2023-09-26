/* eslint-disable react/prop-types */

export const NextPage = ({ reducePage, page, total_pages, increasePage }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <button className="btn_sm text-white" onClick={reducePage}>
        Prev
      </button>
      <p className="font-bold text-base flex items-center gap-1 justify-center">
        Page <span className="text-rose-500 text-2xl">{page}</span> of{" "}
        {total_pages}
      </p>
      <button className="btn_sm text-white" onClick={increasePage}>
        Next
      </button>
    </div>
  );
};
