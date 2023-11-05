import React from 'react';
import TeamCard from './TeamCard';
import Team1 from '@/public/team-1.jpg.png';
import Team2 from '@/public/team-2.jpg.png';
import Team3 from '@/public/team-3.jpg.png';
import { it } from 'node:test';
import Link from 'next/link';
function MeetOurTeam() {
  const teamMembers = [
    {
      img: Team1,
      name: 'Christian Krauter',
      position: 'Gründer & Geschäftsführer',
    },
    {
      img: Team2,
      name: 'Dr. Jörg Krauter',
      position: 'Experte & Berater',
    },
    {
      img: Team3,
      name: 'Celine Jensen',
      position: 'Marketing Expertin',
    },
  ];
  return (
    <div id='TreffenSieunserTeam'>
      <div className='mb-20 mt-10 text-center font-Marsden'>
        <span className='text-[38px] font-medium leading-[72px] text-white md:text-[62px]'>
          Lerne das KI.m{' '}
        </span>
        <span className='text-[38px] font-medium leading-[72px] text-yellow-600 md:text-[62px]'>
          Team kennen
        </span>
      </div>

      <div className=' flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-10 md:flex-row md:justify-between md:space-x-24 md:space-y-0  lg:min-w-[900px]'>
          {teamMembers.map((item, index) => (
            <TeamCard
              key={item.name}
              img={item.img}
              name={item.name}
              position={item.position}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className='mt-[65px] flex items-center justify-center'>
        <Link href='#'>
          <button className='h-[61px] w-[225px]  rounded-[10px] bg-[#B77828]'>
            <div className='font-Marsden text-xl font-medium text-white'>
              Alle kennenlernen
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MeetOurTeam;
