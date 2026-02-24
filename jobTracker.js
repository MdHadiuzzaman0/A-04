const total =document.getElementById('total');
const interviewCount =document.getElementById('interviewCount');
const rejectedCount =document.getElementById('rejectedCount');

const allshowBtn=document.getElementById('allshowBtn')
const interviewshowBtn=document.getElementById('interviewshowBtn')
const rejectedshowBtn=document.getElementById('rejectedshowBtn')

const filterSection=document.getElementById('filteredSection');

const card=document.getElementById('allcards');



// jobCounter 
function updateJobCounter() {
    const totalJobs = card.children.length;

    if (currentstatus === 'allshowBtn') {
        jobCounter.innerText = `${totalJobs} jobs`;
    }
    else if (currentstatus === 'interviewshowBtn') {
        jobCounter.innerText = `${interviewList.length} of ${totalJobs} jobs`;
    }
    else if (currentstatus === 'rejectedshowBtn') {
        jobCounter.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
    }
}

// 3btn color change
function showOnly(id){
            const buttons= document.querySelectorAll('#btn3 button');
            // console.log(buttons);
            for(const button of buttons){
                button.style.backgroundColor="white";
                button.style.color='#64748B';
            }
            
            const selected=document.getElementById(id);
            currentstatus=id;
            selected.style.backgroundColor="black";
            selected.style.color="white";

            if(id === 'interviewshowBtn'){
                card.classList.add('hidden');
                filterSection.classList.remove('hidden');
                renderinterview()
            }
            else if(id === 'allshowBtn'){
                card.classList.remove('hidden');
                filterSection.classList.add('hidden');
            }
            else if(id === 'rejectedshowBtn'){
                card.classList.add('hidden');
                filterSection.classList.remove('hidden');
                renderrejected();
            }
           updateJobCounter();
        }


// card no determine

        function calculateCount(){
             total.innerText =card.children.length;
             interviewCount.innerText=interviewList.length;
             rejectedCount.innerText=rejectedList.length;
             updateJobCounter();
        }

        calculateCount();
        //  const card=document.querySelector("#card");
        //  console.log(card.children);
       // const CARD=document.querySelectorAll("#card > div").length;
       // console.log(CARD)


// not applied text change 
const cards=document.querySelectorAll('#allcards > div')
        for(const card of cards){
            const interview =card.querySelector('.interviewBtn');
            const rejected=card.querySelector('.rejectedBtn');
            const status=card.querySelector('.status');

            interview.addEventListener('click', function(){
            status.innerText = "INTERVIEW";
            status.classList.remove('bg-[#EEF4FF]', 'bg-[#EF4444]');
            status.classList.add('bg-[#10B981]', 'text-white', 'rounded-2xl', 'text-center')});

        rejected.addEventListener('click', function(){
           status.innerText = "REJECTED";
           status.classList.remove('bg-[#EEF4FF]', 'bg-[#10B981]');
           status.classList.add('bg-[#EF4444]', 'text-white', 'rounded-2xl', 'text-center');
        })
    }



const emptyTemplate = `
<div class="text-center bg-white rounded-xl p-20">
    <img src="./jobs.png" class="mx-auto mb-5">
    <h1 class="text-[#002C5C] font-semibold text-[24px]">No jobs available</h1>
    <p class="text-[#64748B]">Check back soon for new job opportunities</p>
</div>
`;

    // <div class=" bg-white p-6 space-y-4 rounded-xl mb-4 border">

    //                 <div class="flex justify-between items-center">
    //                     <div>
    //                         <h3 class="font-semibold text-[18px] text-[#002C5C] ">WebFlow Agency</h3>
    //                         <p class="text-[#64748B]">Web Designer & Developer</p>
    //                     </div>
    //                     <div>
    //                         <i class="fa-solid fa-trash-can"></i>
    //                     </div>
    //                 </div>

    //                 <p class="text-[#64748B] text-[14px]">Los Angeles, CA • Part-time • $80,000 - $120,000</p>
    //                 <p class="status bg-[#EEF4FF] p-2 w-[113px] text-[#002C5C] text-[14px] mb-2">NOT APPLIED</p>
    //                 <p class="text-[#323B49] text-[14px]">Create stunning web experiences for high-profile clients. Must
    //                     have portfolio and experience with modern web design trends.</p>

    //                 <button
    //                     class="interviewBtn text-[#10B981] text-[14px] font-semibold p-2 mr-2 rounded-xl border-2 border-[#10B981]">INTERVIEW</button>

    //                 <button
    //                     class="rejectedBtn text-[#EF4444] text-[14px] font-semibold p-2 rounded-xl border-2 border-[#EF4444]">REJECTED</button>

    //             </div>

    // <div class="text-center bg-white rounded-xl p-20">
    //                 <img src="./jobs.png" class="mx-auto mb-5">
    //                 <h1 class="text-[#002C5C] font-semibold text-[24px]">No jobs available</h1>
    //                 <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    //             </div>