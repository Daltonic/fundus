'use client'

import CampaignCard from '@/components/CampaignCard'
import CampaignHero from '@/components/CampaignHero'
import { campaigns as dummyCampaigns } from '@/data'
import { Campaign } from '@/utils/interfaces'
import { useEffect, useState } from 'react'

export default function Page() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  useEffect(() => {
    setCampaigns(dummyCampaigns)
  }, [])

  return (
    <div className="container mx-auto p-6">
      <CampaignHero />
      <div className='h-10'/>
      <h1 className="text-3xl font-bold mb-6">Explore Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((campaign: Campaign) => (
          <CampaignCard key={campaign.cid} campaign={campaign} />
        ))}
      </div>
    </div>
  )
}
