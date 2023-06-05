
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner  '>
            <div className='overlay w-100 h-100 d-flex align-items-center'>
                <div>
                    <h1 className='banner-bg p-3 text-center  text-lg-start'>Manage Your Daily Tasks</h1>
                    <h5 className='banner-bg p-3'>
                        Efficient task management ensures prioritization, organization, and productivity.
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Banner;