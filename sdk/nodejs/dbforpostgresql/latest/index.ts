// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./configuration";
export * from "./database";
export * from "./firewallRule";
export * from "./getConfiguration";
export * from "./getDatabase";
export * from "./getFirewallRule";
export * from "./getPrivateEndpointConnection";
export * from "./getServer";
export * from "./getServerAdministrator";
export * from "./getServerKey";
export * from "./getVirtualNetworkRule";
export * from "./privateEndpointConnection";
export * from "./server";
export * from "./serverAdministrator";
export * from "./serverKey";
export * from "./virtualNetworkRule";

// Export enums:
export * from "../../types/enums/dbforpostgresql/latest";

// Import resources to register:
import { Configuration } from "./configuration";
import { Database } from "./database";
import { FirewallRule } from "./firewallRule";
import { PrivateEndpointConnection } from "./privateEndpointConnection";
import { Server } from "./server";
import { ServerAdministrator } from "./serverAdministrator";
import { ServerKey } from "./serverKey";
import { VirtualNetworkRule } from "./virtualNetworkRule";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:dbforpostgresql/latest:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:ServerAdministrator":
                return new ServerAdministrator(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:ServerKey":
                return new ServerKey(name, <any>undefined, { urn })
            case "azure-nextgen:dbforpostgresql/latest:VirtualNetworkRule":
                return new VirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "dbforpostgresql/latest", _module)
