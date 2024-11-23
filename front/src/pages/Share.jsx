import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import ShareButton from '../components/ShareButton'
import FullButton from '../components/Button'
import '../App.css'

export default function SharePage() {
    const { report_id, page_id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { pages_info } = location.state || {};

    const currentPageId = parseInt(page_id, 10);

    const goToPrevPage = () => {
        const prevPageId = currentPageId - 1;
        if (pages_info.some((page) => parseInt(page.page_index, 10) === prevPageId)) {
            navigate(`/report/${report_id}/${prevPageId}`, {
                state: location.state
            });
        }
    }

    const goToInputPage = () => {
        navigate("/input");
    }

    const handlers = useSwipeable(
        {
            onSwipedRight: goToPrevPage,
            trackMouse: true
        }
    );

    return <div className="swipeable-container" {...handlers}>
        <div className="tempStatement">공유하기 페이지</div>
        <div className="button-container">
            <ShareButton onClick={() => {}}/>
            <FullButton displayMessage={"다시 입력하기"} onClick={goToInputPage}/>
        </div>
    </div>
};