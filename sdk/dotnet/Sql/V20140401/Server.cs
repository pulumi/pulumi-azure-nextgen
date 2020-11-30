// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20140401
{
    /// <summary>
    /// Represents a server.
    /// </summary>
    public partial class Server : Pulumi.CustomResource
    {
        /// <summary>
        /// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
        /// </summary>
        [Output("administratorLogin")]
        public Output<string?> AdministratorLogin { get; private set; } = null!;

        /// <summary>
        /// The administrator login password (required for server creation).
        /// </summary>
        [Output("administratorLoginPassword")]
        public Output<string?> AdministratorLoginPassword { get; private set; } = null!;

        /// <summary>
        /// The display name of the Azure Active Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators
        /// </summary>
        [Output("externalAdministratorLogin")]
        public Output<string> ExternalAdministratorLogin { get; private set; } = null!;

        /// <summary>
        /// The ID of the Active Azure Directory object with admin permissions on this server. Legacy parameter, always null. To check for Active Directory admin, query .../servers/{serverName}/administrators.
        /// </summary>
        [Output("externalAdministratorSid")]
        public Output<string> ExternalAdministratorSid { get; private set; } = null!;

        /// <summary>
        /// The fully qualified domain name of the server.
        /// </summary>
        [Output("fullyQualifiedDomainName")]
        public Output<string> FullyQualifiedDomainName { get; private set; } = null!;

        /// <summary>
        /// Kind of sql server.  This is metadata used for the Azure portal experience.
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The state of the server.
        /// </summary>
        [Output("state")]
        public Output<string> State { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The version of the server.
        /// </summary>
        [Output("version")]
        public Output<string?> Version { get; private set; } = null!;


        /// <summary>
        /// Create a Server resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Server(string name, ServerArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20140401:Server", name, args ?? new ServerArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Server(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20140401:Server", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/latest:Server"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20150501preview:Server"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20190601preview:Server"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:Server"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Server resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Server Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Server(name, id, options);
        }
    }

    public sealed class ServerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Administrator username for the server. Can only be specified when the server is being created (and is required for creation).
        /// </summary>
        [Input("administratorLogin")]
        public Input<string>? AdministratorLogin { get; set; }

        /// <summary>
        /// The administrator login password (required for server creation).
        /// </summary>
        [Input("administratorLoginPassword")]
        public Input<string>? AdministratorLoginPassword { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The version of the server.
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        public ServerArgs()
        {
        }
    }
}
