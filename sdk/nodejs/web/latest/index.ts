// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./appServiceEnvironment";
export * from "./appServicePlan";
export * from "./appServicePlanRouteForVnet";
export * from "./certificate";
export * from "./certificateCsr";
export * from "./connection";
export * from "./connectionGateway";
export * from "./customApi";
export * from "./getAppServiceEnvironment";
export * from "./getAppServicePlan";
export * from "./getCertificate";
export * from "./getCertificateCsr";
export * from "./getConnection";
export * from "./getConnectionGateway";
export * from "./getCustomApi";
export * from "./getManagedHostingEnvironment";
export * from "./getSiteInstanceDeployment";
export * from "./getSiteInstanceDeploymentSlot";
export * from "./getStaticSite";
export * from "./getWebApp";
export * from "./getWebAppDeployment";
export * from "./getWebAppDeploymentSlot";
export * from "./getWebAppDiagnosticLogsConfiguration";
export * from "./getWebAppDomainOwnershipIdentifier";
export * from "./getWebAppDomainOwnershipIdentifierSlot";
export * from "./getWebAppFunction";
export * from "./getWebAppHostNameBinding";
export * from "./getWebAppHostNameBindingSlot";
export * from "./getWebAppHybridConnection";
export * from "./getWebAppHybridConnectionSlot";
export * from "./getWebAppInstanceFunctionSlot";
export * from "./getWebAppPremierAddOn";
export * from "./getWebAppPremierAddOnSlot";
export * from "./getWebAppPrivateEndpointConnection";
export * from "./getWebAppPublicCertificate";
export * from "./getWebAppPublicCertificateSlot";
export * from "./getWebAppRelayServiceConnection";
export * from "./getWebAppRelayServiceConnectionSlot";
export * from "./getWebAppSiteExtension";
export * from "./getWebAppSiteExtensionSlot";
export * from "./getWebAppSlot";
export * from "./getWebAppSlotConfigurationNames";
export * from "./getWebAppSourceControl";
export * from "./getWebAppSourceControlSlot";
export * from "./getWebAppSwiftVirtualNetworkConnection";
export * from "./getWebAppSwiftVirtualNetworkConnectionSlot";
export * from "./getWebAppVnetConnection";
export * from "./getWebAppVnetConnectionSlot";
export * from "./listAppServicePlanHybridConnectionKeys";
export * from "./listConnectionConsentLinks";
export * from "./listCustomApiWsdlInterfaces";
export * from "./listSiteIdentifiersAssignedToHostName";
export * from "./listStaticSiteBuildFunctionAppSettings";
export * from "./listStaticSiteFunctionAppSettings";
export * from "./listStaticSiteSecrets";
export * from "./listStaticSiteUsers";
export * from "./listWebAppAuthSettings";
export * from "./listWebAppAuthSettingsSlot";
export * from "./listWebAppAzureStorageAccounts";
export * from "./listWebAppAzureStorageAccountsSlot";
export * from "./listWebAppBackupConfiguration";
export * from "./listWebAppBackupConfigurationSlot";
export * from "./listWebAppBackupStatusSecrets";
export * from "./listWebAppBackupStatusSecretsSlot";
export * from "./listWebAppConnectionStrings";
export * from "./listWebAppConnectionStringsSlot";
export * from "./listWebAppFunctionKeys";
export * from "./listWebAppFunctionKeysSlot";
export * from "./listWebAppFunctionSecrets";
export * from "./listWebAppFunctionSecretsSlot";
export * from "./listWebAppHostKeys";
export * from "./listWebAppHostKeysSlot";
export * from "./listWebAppHybridConnectionKeys";
export * from "./listWebAppHybridConnectionKeysSlot";
export * from "./listWebAppMetadata";
export * from "./listWebAppMetadataSlot";
export * from "./listWebAppPublishingCredentials";
export * from "./listWebAppPublishingCredentialsSlot";
export * from "./listWebAppSiteBackups";
export * from "./listWebAppSiteBackupsSlot";
export * from "./listWebAppSitePushSettings";
export * from "./listWebAppSitePushSettingsSlot";
export * from "./listWebAppSyncFunctionTriggers";
export * from "./listWebAppSyncFunctionTriggersSlot";
export * from "./listWebApplicationSettings";
export * from "./listWebApplicationSettingsSlot";
export * from "./managedHostingEnvironment";
export * from "./siteInstanceDeployment";
export * from "./siteInstanceDeploymentSlot";
export * from "./staticSite";
export * from "./webApp";
export * from "./webAppDeployment";
export * from "./webAppDeploymentSlot";
export * from "./webAppDiagnosticLogsConfiguration";
export * from "./webAppDomainOwnershipIdentifier";
export * from "./webAppDomainOwnershipIdentifierSlot";
export * from "./webAppFunction";
export * from "./webAppHostNameBinding";
export * from "./webAppHostNameBindingSlot";
export * from "./webAppHybridConnection";
export * from "./webAppHybridConnectionSlot";
export * from "./webAppInstanceFunctionSlot";
export * from "./webAppPremierAddOn";
export * from "./webAppPremierAddOnSlot";
export * from "./webAppPrivateEndpointConnection";
export * from "./webAppPublicCertificate";
export * from "./webAppPublicCertificateSlot";
export * from "./webAppRelayServiceConnection";
export * from "./webAppRelayServiceConnectionSlot";
export * from "./webAppSiteExtension";
export * from "./webAppSiteExtensionSlot";
export * from "./webAppSlot";
export * from "./webAppSlotConfigurationNames";
export * from "./webAppSourceControl";
export * from "./webAppSourceControlSlot";
export * from "./webAppSwiftVirtualNetworkConnection";
export * from "./webAppSwiftVirtualNetworkConnectionSlot";
export * from "./webAppVnetConnection";
export * from "./webAppVnetConnectionSlot";

// Export enums:
export * from "../../types/enums/web/latest";

// Import resources to register:
import { AppServiceEnvironment } from "./appServiceEnvironment";
import { AppServicePlan } from "./appServicePlan";
import { AppServicePlanRouteForVnet } from "./appServicePlanRouteForVnet";
import { Certificate } from "./certificate";
import { CertificateCsr } from "./certificateCsr";
import { Connection } from "./connection";
import { ConnectionGateway } from "./connectionGateway";
import { CustomApi } from "./customApi";
import { ManagedHostingEnvironment } from "./managedHostingEnvironment";
import { SiteInstanceDeployment } from "./siteInstanceDeployment";
import { SiteInstanceDeploymentSlot } from "./siteInstanceDeploymentSlot";
import { StaticSite } from "./staticSite";
import { WebApp } from "./webApp";
import { WebAppDeployment } from "./webAppDeployment";
import { WebAppDeploymentSlot } from "./webAppDeploymentSlot";
import { WebAppDiagnosticLogsConfiguration } from "./webAppDiagnosticLogsConfiguration";
import { WebAppDomainOwnershipIdentifier } from "./webAppDomainOwnershipIdentifier";
import { WebAppDomainOwnershipIdentifierSlot } from "./webAppDomainOwnershipIdentifierSlot";
import { WebAppFunction } from "./webAppFunction";
import { WebAppHostNameBinding } from "./webAppHostNameBinding";
import { WebAppHostNameBindingSlot } from "./webAppHostNameBindingSlot";
import { WebAppHybridConnection } from "./webAppHybridConnection";
import { WebAppHybridConnectionSlot } from "./webAppHybridConnectionSlot";
import { WebAppInstanceFunctionSlot } from "./webAppInstanceFunctionSlot";
import { WebAppPremierAddOn } from "./webAppPremierAddOn";
import { WebAppPremierAddOnSlot } from "./webAppPremierAddOnSlot";
import { WebAppPrivateEndpointConnection } from "./webAppPrivateEndpointConnection";
import { WebAppPublicCertificate } from "./webAppPublicCertificate";
import { WebAppPublicCertificateSlot } from "./webAppPublicCertificateSlot";
import { WebAppRelayServiceConnection } from "./webAppRelayServiceConnection";
import { WebAppRelayServiceConnectionSlot } from "./webAppRelayServiceConnectionSlot";
import { WebAppSiteExtension } from "./webAppSiteExtension";
import { WebAppSiteExtensionSlot } from "./webAppSiteExtensionSlot";
import { WebAppSlot } from "./webAppSlot";
import { WebAppSlotConfigurationNames } from "./webAppSlotConfigurationNames";
import { WebAppSourceControl } from "./webAppSourceControl";
import { WebAppSourceControlSlot } from "./webAppSourceControlSlot";
import { WebAppSwiftVirtualNetworkConnection } from "./webAppSwiftVirtualNetworkConnection";
import { WebAppSwiftVirtualNetworkConnectionSlot } from "./webAppSwiftVirtualNetworkConnectionSlot";
import { WebAppVnetConnection } from "./webAppVnetConnection";
import { WebAppVnetConnectionSlot } from "./webAppVnetConnectionSlot";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:web/latest:AppServiceEnvironment":
                return new AppServiceEnvironment(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:AppServicePlan":
                return new AppServicePlan(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:AppServicePlanRouteForVnet":
                return new AppServicePlanRouteForVnet(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:CertificateCsr":
                return new CertificateCsr(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:Connection":
                return new Connection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:ConnectionGateway":
                return new ConnectionGateway(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:CustomApi":
                return new CustomApi(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:ManagedHostingEnvironment":
                return new ManagedHostingEnvironment(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:SiteInstanceDeployment":
                return new SiteInstanceDeployment(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:SiteInstanceDeploymentSlot":
                return new SiteInstanceDeploymentSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:StaticSite":
                return new StaticSite(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebApp":
                return new WebApp(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppDeployment":
                return new WebAppDeployment(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppDeploymentSlot":
                return new WebAppDeploymentSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppDiagnosticLogsConfiguration":
                return new WebAppDiagnosticLogsConfiguration(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppDomainOwnershipIdentifier":
                return new WebAppDomainOwnershipIdentifier(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppDomainOwnershipIdentifierSlot":
                return new WebAppDomainOwnershipIdentifierSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppFunction":
                return new WebAppFunction(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppHostNameBinding":
                return new WebAppHostNameBinding(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppHostNameBindingSlot":
                return new WebAppHostNameBindingSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppHybridConnection":
                return new WebAppHybridConnection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppHybridConnectionSlot":
                return new WebAppHybridConnectionSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppInstanceFunctionSlot":
                return new WebAppInstanceFunctionSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppPremierAddOn":
                return new WebAppPremierAddOn(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppPremierAddOnSlot":
                return new WebAppPremierAddOnSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppPrivateEndpointConnection":
                return new WebAppPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppPublicCertificate":
                return new WebAppPublicCertificate(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppPublicCertificateSlot":
                return new WebAppPublicCertificateSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppRelayServiceConnection":
                return new WebAppRelayServiceConnection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppRelayServiceConnectionSlot":
                return new WebAppRelayServiceConnectionSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSiteExtension":
                return new WebAppSiteExtension(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSiteExtensionSlot":
                return new WebAppSiteExtensionSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSlot":
                return new WebAppSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSlotConfigurationNames":
                return new WebAppSlotConfigurationNames(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSourceControl":
                return new WebAppSourceControl(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSourceControlSlot":
                return new WebAppSourceControlSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSwiftVirtualNetworkConnection":
                return new WebAppSwiftVirtualNetworkConnection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppSwiftVirtualNetworkConnectionSlot":
                return new WebAppSwiftVirtualNetworkConnectionSlot(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppVnetConnection":
                return new WebAppVnetConnection(name, <any>undefined, { urn })
            case "azure-nextgen:web/latest:WebAppVnetConnectionSlot":
                return new WebAppVnetConnectionSlot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "web/latest", _module)
