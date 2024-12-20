import React from 'react';

const About = () => {
    const teamMembers = [
        { name: 'Ahmet MÜJDE', photo: '/Ahmet_Mujde.jpg', role: 'Backend Developer' },
        { name: 'Batuhan AYYILDIZ', photo: '/Batuhan_Ayyildiz.jpg', role: 'Scrum Master' },
        { name: 'Elanur İLERİ', photo: '/Elanur_Ileri.jpg', role: 'Product Owner / Frontend Developer' },
        { name: 'Hikmet KESERCİ', photo: '/Hikmet_Keserci.jpg', role: 'QA Engineer' },
        { name: 'Onur KONUK', photo: '/Onur_Konuk.jpg', role: 'DevOps Engineer' },
        { name: 'Sema Nimet ÜNAL', photo: '/SemaNimet_Unal.jpg', role: 'Full Stack Developer' },
        { name: 'Zehra İkbal ÖZTÜRK', photo: '/ZehraIkbal_Ozturk.jpg', role: 'QA Engineer' },
        { photo: '/Adoptify_logo.png', name: 'Adoptify', role: 'Our Logo' }, // Logo için ekleme
    ];

    return (
        <section id="about" className="my-12 px-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-transform transform hover:scale-110 hover:shadow-xl hover:shadow-blue-300"
                    >
                        {member.photo && !member.name ? (
                            // Logo durumu
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-40 h-40 mx-auto object-contain rounded-full mt-4"
                            />
                        ) : (
                            // Diğer üyeler için resim
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-40 h-40 mx-auto object-cover rounded-full mt-4"
                            />
                        )}
                        <div className="p-6 bg-gradient-to-r from-indigo-200 via-blue-200 to-teal-200">
                            {member.name && (
                                <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                            )}
                            {member.role && (
                                <p className="text-md text-gray-600 mt-2">{member.role}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
