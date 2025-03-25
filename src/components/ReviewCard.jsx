/**
 * @copyright 2024 joejoeoyemi
 * @license Apache-2.0
 *
 */

/**
 * Node modules
 *
 * 
 */

import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1'},
});

const ReviewCard = ({ imgUrl, name, company, content }) => {
  return (
    <div className="bg-slate-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span className="material-symbols-rounded text-yellow-300 text-[18px]" key={key} style={style}>
            {icon} 
          </span>
        ))}
      </div>

      <p className="text-slate-400 mb-8">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
            <img 
            src={imgUrl}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover" />
        </figure>

        <div>
            <p>{name}</p>

            <p className="text-xs text-slate-400 tracking-wider">
                {company}
            </p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default ReviewCard;
