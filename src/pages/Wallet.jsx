import Navigation2 from "./Navigation2";

export default function Wallet(){
    return(
        <>
      <Navigation2/>
<div class="font-manrope flex h-screen w-full items-center justify-center">
  <div class="mx-auto box-border w-[365px] border bg-white p-4">
    <div class="flex items-center justify-between">
      <span class="text-[#64748B]">Withdrawing Money</span>
      <div class="cursor-pointer border rounded-[4px]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <div class="mt-6">
      <div class="font-semibold">How much would you like to Withdraw?</div>
      <div><input class="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2" value="100.00" type="text" placeholder="100.00" /></div>
      <div class="flex justify-between">
        <div class="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">Rs.10.00</div>
        <div class="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">Rs.50.00</div>
        <div class="mt-[14px] cursor-pointer truncate rounded-[4px] border border-green-700 p-3 text-[#191D23]">Rs.100.00</div>
        <div class="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]">Rs.200.00</div>
      </div>
    </div>

    <div class="mt-6">
      <div class="font-semibold">From</div>
      <div class="mt-2">
        <div class="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
          <div class="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#299D37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="font-semibold">Checking</span>
          </div>

          <div class="flex items-center gap-x-2">
            <div class="text-[#64748B]">Wallet</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="flex justify-between">
        <span class="font-semibold text-[#191D23]">Receiving</span>
        <div class="flex cursor-pointer items-center gap-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="font-semibold text-green-700">Add recipient</div>
        </div>
      </div>

      <div class="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        <div>
          <div class="font-semibold">Pranay Makur</div>
          <div class="text-[#64748B]">@pranavji</div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <div class="w-full cursor-pointer rounded-[4px] bg-green px-3 py-[6px] text-center font-semibold text-white">Withdraw Rs.100.00</div>
    </div>
  </div>
</div>
        </>
    )
}