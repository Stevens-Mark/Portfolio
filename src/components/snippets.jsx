// const [data, setData] = useState(projects);
// const [sortType, setSortType] = useState('reset')

// useEffect(() => {
//   const sortArray = type => {


//     const types = {
//       reset:  [...projects],
//       up:  [...projects].sort((a, b) => (a.date > b.date ? -1 : 1)),
//       down: [...projects].sort((a, b) => (a.date < b.date ? -1 : 1)),
//     }
//     const sortProperty = types[type]
//     setData(sortProperty)
//     }
//   sortArray(sortType)
// }, [sortType, projects])


// <select defaultValue={'DEFAULT'} onChange={(e) => setSortType(e.target.value)}> 
// <option value="DEFAULT" disabled>Filter By</option>
// <option value="up">Up</option>
// <option value="down">Down</option>
// <option value="reset">Reset</option>
// </select>