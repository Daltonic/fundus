use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Campaign {
    pub cid: u64,
    pub creator: Pubkey,
    #[max_len(64)]
    pub title: String,
    #[max_len(512)]
    pub description: String,
    #[max_len(256)]
    pub image_url: String,
    pub goal: u64,
    pub amount_raised: u64,
    pub timestamp: u64,
    pub donors: u64,
    pub withdrawals: u64,
    pub balance: u64,
    pub active: bool,
}