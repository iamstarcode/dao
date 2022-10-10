import { DeployFunction } from "hardhat-deploy/types"
import { verify } from "../helper-functions"
import { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } from "../helper-hardhat-config"

const func: DeployFunction = async ({ deployments, getNamedAccounts, network }) => {
    const { deployer, log } = await getNamedAccounts()
    const { deploy } = deployments

    const waitConfirmation = developmentChains.includes(network.name) ? 1 : 3

    const fakeMarketPlace = await deploy("FakeNFTMarketplace", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: waitConfirmation,
    })

    if (!developmentChains.includes(network.name)) {
        await verify(fakeMarketPlace.address, [])
    }
}

func.tags = ["all", "nft"]
export default func
