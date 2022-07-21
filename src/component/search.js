import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actionChooseCity, actionSearchKeyWords } from '../actions/index';

function Search(props){
    
    const [resultSearch, setResultSearch] = useState([]);
    const [currentKeyword, setCurrentKeyword] = useState('');
    const [showBoxResult, setShowBoxResult] = useState(false);
    console.log(props.list_city)
    useEffect(() => {
        if(Array.isArray(props.list_city) && props.list_city !== null){
            if(props.list_city.length){
                setResultSearch(props.list_city)
                setShowBoxResult(true);
            }
        }
    },[props.list_city]);

    const handleInputChange = (event) => {
        const target  = event.target;
        const value = target.value;
        setCurrentKeyword(value);
        if(value.length >=3){
            props.searchKeyWord(value);
        }else{
            setResultSearch([]);
            setShowBoxResult(false);
        }
    };

    const handleItemClick = (event, itemData) => {
		props.chooseCity({
			name: event.target.innerText,
			lat: itemData.lat,
			lon: itemData.lon
		});
		props.searchKeyWord(null);
		setResultSearch([]);
		setShowBoxResult(false);
		setCurrentKeyword(event.target.innerText);
	};

    const RenderItem = (props) => {
		const itemData = props.itemData;
		if (itemData.lat && itemData.lon) {
			return <li role="button"
						onClick={event => handleItemClick(event, itemData)}
						className="list" style={{cursor:"pointer"}}>
				<span>
					{(itemData.local_names && ('vi' in itemData.local_names)) ? itemData.local_names.vi : itemData.name}
				</span>
			</li>;
		}
	}

	const listItems = resultSearch.map((item, index) => (
		<RenderItem key={index.toString()} itemData={item} />
	));
    
    const RenderBoxResult = () => {
		if (showBoxResult) {
			return <div className="list dropdown">
					<ul className="dropdown-menu show">
						{listItems}
					</ul>
				</div>;
		}
	}

    // const click_clown = () => {
    //     var x = document.querySelector(".clown-say");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    // }
    return(
        <div className="search">
             <input
                    name="city"
                    type="text"
                    placeholder="Search Here"
                    value={currentKeyword}
                    onChange = {handleInputChange}
                />
                <RenderBoxResult />
                <div className="user" >
                    <img src={require("../img/user.png")} alt="lofi" className="clown" />
                    {/* <p className="clown-say">What are you locking for! heheh</p> */}
                </div>   
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        chooseCity:(data) => {
            dispatch(actionChooseCity(data))
        },
        searchKeyWord:(data) => {
            dispatch(actionSearchKeyWords(data))
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return{
        list_city :state.list_city,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);