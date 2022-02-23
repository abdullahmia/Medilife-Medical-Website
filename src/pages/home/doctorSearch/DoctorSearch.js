import './doctorsearch.css';

const DoctorSearch = () => {
    return (
        <div className="container doctor-search wrapper-bottom">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 mb-lg-0 mb-4 doctor-search-left">
                    <form className='py-5 px-4'>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="form-group">
                                    <select type="text" className="search-input" id="speciality">
                                        <option value="speciality">Speciality</option>
                                        <option value="speciality">Speciality 2</option>
                                        <option value="speciality">Speciality 3</option>
                                        <option value="speciality">Speciality 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="form-group">
                                    <select type="text" className="search-input" id="speciality">
                                        <option value="speciality">Doctor 1</option>
                                        <option value="speciality">Doctor 2</option>
                                        <option value="speciality">Doctor 3</option>
                                        <option value="speciality">Doctor 4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <input type="date" className="search-input" />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <input type="time" className="search-input" />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-3">
                                <input type="text" placeholder='Name' className='search-input-noborder' />
                            </div>

                            <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-3">
                                <input type="number" placeholder='Phone' className='search-input-noborder' />
                            </div>

                            <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-3">
                                <input type="email" placeholder='E-mail' className='search-input-noborder' />
                            </div>
                            
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-8 col-md-12 col-sm-12 mb-lg-0 mb-3">
                                <textarea placeholder='Message' className='search-input-noborder' cols="30" rows="3"></textarea>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-3 d-flex align-items-end">
                                <button className='medilife-btn' type="submit">
                                    Make an Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 mb-lg-0 mb-4 doctor-search-right">
                    <div className='py-2 text-light search-address-item'>
                        <i class="fa-solid fa-alarm-clock mb-3"></i>
                        <p className='text-light'>Mon - Sat 08:00 - 21:00 Sunday CLOSED</p>
                    </div>
                    <div className='py-2 text-light search-address-item'>
                        <i class="fa-regular fa-envelope mb-3"></i>
                        <p className='text-light'>0080 673 729 766
                        contact@business.com</p>
                    </div>
                    <div className='py-2 text-light search-address-item'>
                        <i class="fa-regular fa-location-dot mb-3"></i>
                        <p className='text-light'>Lamas Str, no 14-18
                        41770 Miami</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorSearch;