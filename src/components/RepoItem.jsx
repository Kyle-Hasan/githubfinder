import React from 'react';
import PropTypes from 'prop-types'
import {FaLink, FaInfo, FaEye,FaUtensils,FaStar} from 'react-icons/fa' 
function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
  return <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div class = "card-body">
      <h3 className='mb-2 text-xl font-semibold text-white'>
          <a href = {html_url}>
              <FaLink className></FaLink> {name}
          </a>
      </h3>
      <p className='mb-3 text-white'>{description}</p>
      <div>
          <div className = "mr-2 badge badge-info badge-lg">
              <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className = "mr-2 badge badge-success badge-lg">
              <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className = "mr-2 badge badge-warning badge-lg">
              <FaUtensils className='mr-2' /> {forks}
          </div>
          <div className = "mr-2 badge badge-info badge-lg">
              <FaEye className='mr-2' /> {open_issues}
          </div>

      </div>
      </div>
  </div>;
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem;
