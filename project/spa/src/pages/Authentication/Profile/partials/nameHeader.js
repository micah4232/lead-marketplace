import { useSelector } from "react-redux"

export default function NameHeader () {
    const user = useSelector((state) => state.authentication.user)
    return (
        <div class="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow rounded-2xl bg-white/80 bg-clip-border mb-4 draggable" draggable="true">
            <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-auto max-w-full px-3">
                <div class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg" alt="profile_image" class="w-full shadow-soft-sm rounded-xl"/>
                </div>
                </div>
                <div class="flex-none w-auto max-w-full px-3 my-auto">
                <div class="h-full">
                    <h5 class="mb-1">{ `${user.first_name} ${user.last_name}` } </h5>
                    <p class="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
                </div>
                </div>
                <div class="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"></div>
            </div>
        </div>
    )
}