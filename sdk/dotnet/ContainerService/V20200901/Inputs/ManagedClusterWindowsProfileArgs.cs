// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20200901.Inputs
{

    /// <summary>
    /// Profile for Windows VMs in the container service cluster.
    /// </summary>
    public sealed class ManagedClusterWindowsProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the password of the administrator account. &lt;br&gt;&lt;br&gt; **Minimum-length:** 8 characters &lt;br&gt;&lt;br&gt; **Max-length:** 123 characters &lt;br&gt;&lt;br&gt; **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled &lt;br&gt; Has lower characters &lt;br&gt;Has upper characters &lt;br&gt; Has a digit &lt;br&gt; Has a special character (Regex match [\W_]) &lt;br&gt;&lt;br&gt; **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!"
        /// </summary>
        [Input("adminPassword")]
        public Input<string>? AdminPassword { get; set; }

        /// <summary>
        /// Specifies the name of the administrator account. &lt;br&gt;&lt;br&gt; **restriction:** Cannot end in "." &lt;br&gt;&lt;br&gt; **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". &lt;br&gt;&lt;br&gt; **Minimum-length:** 1 character &lt;br&gt;&lt;br&gt; **Max-length:** 20 characters
        /// </summary>
        [Input("adminUsername", required: true)]
        public Input<string> AdminUsername { get; set; } = null!;

        /// <summary>
        /// The licenseType to use for Windows VMs. Windows_Server is used to enable Azure Hybrid User Benefits for Windows VMs.
        /// </summary>
        [Input("licenseType")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200901.LicenseType>? LicenseType { get; set; }

        public ManagedClusterWindowsProfileArgs()
        {
        }
    }
}
