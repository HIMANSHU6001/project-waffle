'use client';

import AboutUs from '@/components/about-us/about-us';
import CampusAmbasador from '@/components/campusAmbasador/CampusAmbasador';
import CommunityPartnerSection from '@/components/communityPartners/CommunityPartners';
import InfiniteGallery from '@/components/gallery/infinite-gallery';
import Hero from '@/components/hero/hero';
import Prizes from '@/components/prizes/prizes';
import Questions from '@/components/questions/Questions';
import { PastSponsors, Sponsors } from '@/components/sponsors/sponsors';
import { StatsMain } from '@/components/stats/stats-main';
import Testimonials from '@/components/testimonials/Testimonials';
import Timeline from '@/components/timeline/timeline';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full px-0 md:px-5'>
      <Hero />
      <AboutUs />
      <StatsMain />
      <Prizes />
      <InfiniteGallery />
      <Timeline />
      <Sponsors />
      <PastSponsors />
      <CommunityPartnerSection />
      <CampusAmbasador />
      <Questions />
      <Testimonials />
    </div>
  );
}
