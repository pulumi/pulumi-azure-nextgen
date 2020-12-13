// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200601
{
    public static class GetWebAppSlot
    {
        public static Task<GetWebAppSlotResult> InvokeAsync(GetWebAppSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppSlotResult>("azure-nextgen:web/v20200601:getWebAppSlot", args ?? new GetWebAppSlotArgs(), options.WithVersion());
    }


    public sealed class GetWebAppSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the deployment slot. By default, this API returns the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public GetWebAppSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppSlotResult
    {
        /// <summary>
        /// Management information availability state for the app.
        /// </summary>
        public readonly string AvailabilityState;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to enable client affinity; &lt;code&gt;false&lt;/code&gt; to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is &lt;code&gt;true&lt;/code&gt;.
        /// </summary>
        public readonly bool? ClientAffinityEnabled;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to enable client certificate authentication (TLS mutual authentication); otherwise, &lt;code&gt;false&lt;/code&gt;. Default is &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        public readonly bool? ClientCertEnabled;
        /// <summary>
        /// client certificate authentication comma-separated exclusion paths
        /// </summary>
        public readonly string? ClientCertExclusionPaths;
        /// <summary>
        /// This composes with ClientCertEnabled setting.
        /// - ClientCertEnabled: false means ClientCert is ignored.
        /// - ClientCertEnabled: true and ClientCertMode: Required means ClientCert is required.
        /// - ClientCertEnabled: true and ClientCertMode: Optional means ClientCert is optional or accepted.
        /// </summary>
        public readonly string? ClientCertMode;
        /// <summary>
        /// If specified during app creation, the app is cloned from a source app.
        /// </summary>
        public readonly Outputs.CloningInfoResponse? CloningInfo;
        /// <summary>
        /// Size of the function container.
        /// </summary>
        public readonly int? ContainerSize;
        /// <summary>
        /// Unique identifier that verifies the custom domains assigned to the app. Customer will add this id to a txt record for verification.
        /// </summary>
        public readonly string? CustomDomainVerificationId;
        /// <summary>
        /// Maximum allowed daily memory-time quota (applicable on dynamic apps only).
        /// </summary>
        public readonly int? DailyMemoryTimeQuota;
        /// <summary>
        /// Default hostname of the app. Read-only.
        /// </summary>
        public readonly string DefaultHostName;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if the app is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. Setting this value to false disables the app (takes the app offline).
        /// </summary>
        public readonly bool? Enabled;
        /// <summary>
        /// Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
        /// the app is not served on those hostnames.
        /// </summary>
        public readonly ImmutableArray<string> EnabledHostNames;
        /// <summary>
        /// Hostname SSL states are used to manage the SSL bindings for app's hostnames.
        /// </summary>
        public readonly ImmutableArray<Outputs.HostNameSslStateResponse> HostNameSslStates;
        /// <summary>
        /// Hostnames associated with the app.
        /// </summary>
        public readonly ImmutableArray<string> HostNames;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to disable the public hostnames of the app; otherwise, &lt;code&gt;false&lt;/code&gt;.
        ///  If &lt;code&gt;true&lt;/code&gt;, the app is only accessible via API management process.
        /// </summary>
        public readonly bool? HostNamesDisabled;
        /// <summary>
        /// App Service Environment to use for the app.
        /// </summary>
        public readonly Outputs.HostingEnvironmentProfileResponse? HostingEnvironmentProfile;
        /// <summary>
        /// HttpsOnly: configures a web site to accept only https requests. Issues redirect for
        /// http requests
        /// </summary>
        public readonly bool? HttpsOnly;
        /// <summary>
        /// Hyper-V sandbox.
        /// </summary>
        public readonly bool? HyperV;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Managed service identity.
        /// </summary>
        public readonly Outputs.ManagedServiceIdentityResponse? Identity;
        /// <summary>
        /// Specifies an operation id if this site has a pending operation.
        /// </summary>
        public readonly string InProgressOperationId;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if the app is a default container; otherwise, &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        public readonly bool IsDefaultContainer;
        /// <summary>
        /// Obsolete: Hyper-V sandbox.
        /// </summary>
        public readonly bool? IsXenon;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Last time the app was modified, in UTC. Read-only.
        /// </summary>
        public readonly string LastModifiedTimeUtc;
        /// <summary>
        /// Resource Location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Maximum number of workers.
        /// This only applies to Functions container.
        /// </summary>
        public readonly int MaxNumberOfWorkers;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
        /// </summary>
        public readonly string OutboundIpAddresses;
        /// <summary>
        /// List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only.
        /// </summary>
        public readonly string PossibleOutboundIpAddresses;
        /// <summary>
        /// Site redundancy mode
        /// </summary>
        public readonly string? RedundancyMode;
        /// <summary>
        /// Name of the repository site.
        /// </summary>
        public readonly string RepositorySiteName;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if reserved; otherwise, &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        public readonly bool? Reserved;
        /// <summary>
        /// Name of the resource group the app belongs to. Read-only.
        /// </summary>
        public readonly string ResourceGroup;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to stop SCM (KUDU) site when the app is stopped; otherwise, &lt;code&gt;false&lt;/code&gt;. The default is &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        public readonly bool? ScmSiteAlsoStopped;
        /// <summary>
        /// Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
        /// </summary>
        public readonly string? ServerFarmId;
        /// <summary>
        /// Configuration of the app.
        /// </summary>
        public readonly Outputs.SiteConfigResponse? SiteConfig;
        /// <summary>
        /// Status of the last deployment slot swap operation.
        /// </summary>
        public readonly Outputs.SlotSwapStatusResponse SlotSwapStatus;
        /// <summary>
        /// Current state of the app.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// App suspended till in case memory-time quota is exceeded.
        /// </summary>
        public readonly string SuspendedTill;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Specifies which deployment slot this app will swap into. Read-only.
        /// </summary>
        public readonly string TargetSwapSlot;
        /// <summary>
        /// Azure Traffic Manager hostnames associated with the app. Read-only.
        /// </summary>
        public readonly ImmutableArray<string> TrafficManagerHostNames;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// State indicating whether the app has exceeded its quota usage. Read-only.
        /// </summary>
        public readonly string UsageState;

        [OutputConstructor]
        private GetWebAppSlotResult(
            string availabilityState,

            bool? clientAffinityEnabled,

            bool? clientCertEnabled,

            string? clientCertExclusionPaths,

            string? clientCertMode,

            Outputs.CloningInfoResponse? cloningInfo,

            int? containerSize,

            string? customDomainVerificationId,

            int? dailyMemoryTimeQuota,

            string defaultHostName,

            bool? enabled,

            ImmutableArray<string> enabledHostNames,

            ImmutableArray<Outputs.HostNameSslStateResponse> hostNameSslStates,

            ImmutableArray<string> hostNames,

            bool? hostNamesDisabled,

            Outputs.HostingEnvironmentProfileResponse? hostingEnvironmentProfile,

            bool? httpsOnly,

            bool? hyperV,

            string id,

            Outputs.ManagedServiceIdentityResponse? identity,

            string inProgressOperationId,

            bool isDefaultContainer,

            bool? isXenon,

            string? kind,

            string lastModifiedTimeUtc,

            string location,

            int maxNumberOfWorkers,

            string name,

            string outboundIpAddresses,

            string possibleOutboundIpAddresses,

            string? redundancyMode,

            string repositorySiteName,

            bool? reserved,

            string resourceGroup,

            bool? scmSiteAlsoStopped,

            string? serverFarmId,

            Outputs.SiteConfigResponse? siteConfig,

            Outputs.SlotSwapStatusResponse slotSwapStatus,

            string state,

            string suspendedTill,

            ImmutableDictionary<string, string>? tags,

            string targetSwapSlot,

            ImmutableArray<string> trafficManagerHostNames,

            string type,

            string usageState)
        {
            AvailabilityState = availabilityState;
            ClientAffinityEnabled = clientAffinityEnabled;
            ClientCertEnabled = clientCertEnabled;
            ClientCertExclusionPaths = clientCertExclusionPaths;
            ClientCertMode = clientCertMode;
            CloningInfo = cloningInfo;
            ContainerSize = containerSize;
            CustomDomainVerificationId = customDomainVerificationId;
            DailyMemoryTimeQuota = dailyMemoryTimeQuota;
            DefaultHostName = defaultHostName;
            Enabled = enabled;
            EnabledHostNames = enabledHostNames;
            HostNameSslStates = hostNameSslStates;
            HostNames = hostNames;
            HostNamesDisabled = hostNamesDisabled;
            HostingEnvironmentProfile = hostingEnvironmentProfile;
            HttpsOnly = httpsOnly;
            HyperV = hyperV;
            Id = id;
            Identity = identity;
            InProgressOperationId = inProgressOperationId;
            IsDefaultContainer = isDefaultContainer;
            IsXenon = isXenon;
            Kind = kind;
            LastModifiedTimeUtc = lastModifiedTimeUtc;
            Location = location;
            MaxNumberOfWorkers = maxNumberOfWorkers;
            Name = name;
            OutboundIpAddresses = outboundIpAddresses;
            PossibleOutboundIpAddresses = possibleOutboundIpAddresses;
            RedundancyMode = redundancyMode;
            RepositorySiteName = repositorySiteName;
            Reserved = reserved;
            ResourceGroup = resourceGroup;
            ScmSiteAlsoStopped = scmSiteAlsoStopped;
            ServerFarmId = serverFarmId;
            SiteConfig = siteConfig;
            SlotSwapStatus = slotSwapStatus;
            State = state;
            SuspendedTill = suspendedTill;
            Tags = tags;
            TargetSwapSlot = targetSwapSlot;
            TrafficManagerHostNames = trafficManagerHostNames;
            Type = type;
            UsageState = usageState;
        }
    }
}
