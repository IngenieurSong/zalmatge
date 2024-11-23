import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import Header from '../components/Header'

const ReportPage = () => {
    const navigate = useNavigate();
    const { report_id, page_id } = useParams();
    const location = useLocation();
    const { pages_info } = location.state || {};

    const currentPage = pages_info?.find((page) => page.page_index === page_id);
    const currentPageId = parseInt(page_id, 10);

    const goToNextPage = () => {
        const nextPageId = currentPageId + 1;
        if (pages_info.some((page) => parseInt(page.page_index, 10) === nextPageId)) {
            if (nextPageId === pages_info.length) {
                navigate(`/report/${report_id}/${nextPageId}/share`, {
                    state: location.state
                });
            } else {
                navigate(`/report/${report_id}/${nextPageId}`, {
                    state: location.state
                });
            }
        }
    }

    const goToPrevPage = () => {
        const prevPageId = currentPageId - 1;
        if (pages_info.some((page) => parseInt(page.page_index, 10) === prevPageId)) {
            navigate(`/report/${report_id}/${prevPageId}`, {
                state: location.state
            });
        }
    }

    const handleTouchStart = () => {
        const touch = e.touches[0];
        const screenWidth = window.innerWidth;
        const margin = 50;

        if (touch.clientX < margin) {
            goToPrevPage();
        }
        else if (touch.clientX > screenWidth - margin) {
            goToNextPage();
        }
    }

    const handlers = useSwipeable(
        {
            onSwipedLeft: goToNextPage,
            onSwipedRight: goToPrevPage,
            onTouchStart: handleTouchStart,
            trackMouse: true
        }
    );

    return (
        <div className="swipeable-container" {...handlers}>
            <Header title={currentPage ? `${currentPage.title}` : 'Report not found'} />
            <div className="tempStatement">
                {currentPage ? (
                    <>
                        <h2>{currentPage.title}</h2>
                        <p>{currentPage.info}</p>
                    </>
                ) : (
                    <p>Page not found</p>
                )}
            </div>
        </div>
    );
}

export default ReportPage;